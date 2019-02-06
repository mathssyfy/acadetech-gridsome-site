<template lang="html">
  <v-layout row>
    <v-dialog
      v-model="postDialog"
      lazy
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-flex
        xs12
        md8
        offset-md2
        lg6
        offset-lg3
      >
        <v-card v-if="this.article">
          <v-toolbar
            dark
            fixed
            color="primary"
          >
            <v-btn
              icon
              dark
              @click.stop="handleCloseDialog()"
            >
              <v-icon>close</v-icon>
            </v-btn>
            <v-toolbar-title>{{ article.title }}</v-toolbar-title>
            <v-spacer />
            <v-btn
              color="white"
              outline
              round
              flat
              @click="handleShare(article)"
            >
              Share
            </v-btn>
            <v-toolbar-items />
          </v-toolbar>
          <v-list
            three-line
            subheader
            style="padding-top: 85px;"
          >
            <h1 class="hidden-md-and-up px-3 font-weight-light display-1">
              {{ article.title }}
            </h1>
            <v-subheader v-if="article.metadata.author">
              Posted on {{ article.published_at | date }} by {{ article.metadata.author.metadata.your_name }}
            </v-subheader>
            <v-layout
              row
              justify-center
              py-2
              class="text-xs-center"
            >
              <v-responsive max-width="600px">
                <v-img :src="article.metadata.featured_image.imgix_url" />
              </v-responsive>
            </v-layout>
            <v-list-tile-content
              class="px-3"
              v-html="article.content"
            />
          </v-list>
          <!-- <v-divider></v-divider> -->
          <!-- POST TAGS -->
          <v-list
            v-if="article.metadata.post_tags"
            three-line
            subheader
          >
            <v-subheader>Tags</v-subheader>
            <PostTags :tags="article.metadata.post_tags" />
          </v-list>
          <!-- COMMENTS -->
          <v-list
            three-line
            subheader
          >
            <v-subheader>{{ getPostComments.length }} Comment(s)</v-subheader>
            <v-alert
              v-if="getPostComments.length <= 0"
              :value="true"
              color="info"
              icon="info"
              outline
              class="mx-3"
            >
              Be the first to leave a comment!
            </v-alert>
            <template v-for="(comment, i) in getPostComments">
              <v-divider
                :key="i"
                inset
              />

              <v-list-tile
                :key="comment._id"
                avatar
              >
                <v-list-tile-avatar>
                  <v-icon
                    color="primary"
                    large
                  >
                    mdi-account-circle-outline
                  </v-icon>
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="comment.metadata.username" />
                  <v-list-tile-sub-title v-html="comment.content" />
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
          <v-list class="py-0">
            <v-subheader>Post a comment</v-subheader>
          </v-list>
          <v-form
            ref="commentForm"
            v-model="validComment"
            validation
            @submit.prevent="postComment()"
          >
            <v-container
              fluid
              py-0
            >
              <v-layout
                row
                wrap
              >
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    v-model="newComment.name"
                    box
                    prepend-icon="mdi-account"
                    :rules="nameRules"
                    :counter="25"
                    label="First name"
                    required
                  />
                </v-flex>
                <v-flex
                  xs12
                  md6
                >
                  <v-text-field
                    v-model="newComment.email"
                    box
                    prepend-icon="mdi-at"
                    :rules="emailRules"
                    label="E-mail"
                    required
                  />
                </v-flex>

                <v-flex
                  xs12
                >
                  <v-text-field
                    v-model="newComment.content"
                    box
                    prepend-icon="mdi-comment-text"
                    :rules="commentRules"
                    label="Comment"
                    :counter="200"
                    required
                  />
                  <div class="text-xs-right">
                    <v-btn
                      type="submit"
                      round
                      depressed
                      class="white--text"
                      color="green lighten-1"
                      :disabled="!validComment"
                    >
                      Post Comment
                    </v-btn>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-dialog>
    <!-- SHARE MENU -->
    <div class="text-xs-center">
      <v-bottom-sheet v-model="shareSheet">
        <!-- <v-btn
        slot="activator"
        color="purple"
        dark
      >
        Click me
      </v-btn> -->

        <v-list>
          <v-subheader>Share via..</v-subheader>
          <v-list-tile
            v-for="(sharer, i) in getShareLinks"
            :key="i"
            :href="sharer.link"
            target="_blank"
          >
            <v-list-tile-avatar>
              <v-avatar
                size="32px"
                tile
              >
                <v-icon>{{ sharer.icon }}</v-icon>
              </v-avatar>
            </v-list-tile-avatar>
            <v-list-tile-title>{{ sharer.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-bottom-sheet>
    </div>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'
import PostTags from './PostTags'
export default {
  components: {
    PostTags
  },
  props: {
    article: {
      type: Object,
      required: true,
      default: null
    }
  },
  data: () => ({
    newComment: {
      name: '',
      email: '',
      content: ''
    },
    validComment: false,
    nameRules: [
      v => !!v || 'Name is required',
      v => v.length <= 25 || 'Name must be less than 25 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    commentRules: [
      v => !!v || 'Comment is required',
      v => v.length <= 200 || 'Comment must be less than 200 characters'
    ],
    dialog: false,
    shareSheet: false
  }),
  computed: {
    ...mapGetters(['getShareLinks', 'getPostComments', 'getSettings']),
    postDialog: {
      get () {
        return this.$store.state.postDialog
      },
      set (val) {
        this.$store.commit('setPostDialog', val)
      }
    }
  },
  methods: {
    postComment () {
      if (this.$refs.commentForm.validate()) {
        this.$store
          .dispatch('postComment', {
            id: this.article._id,
            name: this.newComment.name,
            email: this.newComment.email,
            content: this.newComment.content,
            moderated: this.getSettings.metadata.moderated_comments
          })
          .then(() => {
            console.log('Posted New Comment!')
          })
      } else {
      }
    },
    handleShare (post) {
      this.shareSheet = true
      const payload = { route: this.$route.path, post }
      this.$store.dispatch('buildShareLinks', payload)
    },
    handleCloseDialog () {
      this.postDialog = false
      this.$router.go(-1)
      this.$store.commit('setActivePost', null)
    }
  },

  metaInfo () {
    return {
      title: this.article.title,
      titleTemplate: '%s | ' + process.env.VUE_APP_TITLE
    }
  }
}
</script>

<style lang="css">
div.v-dialog {
  background: rgba(0, 0, 0, 0.5);
}
</style>
