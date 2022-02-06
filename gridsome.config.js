// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '~/plugins/gridsome-plugin-firebase-auth',
      options: { //should be copied from `const firebaseConfig = "object"` line

      }
    }
  ]
}
