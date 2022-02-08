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
        apiKey: "AIzaSyDXQudbi3R0bLRsTUGorp56x4wLsy0neKA",
        authDomain: "arogyadham-shipperstack.firebaseapp.com",
        projectId: "arogyadham-shipperstack",
        storageBucket: "arogyadham-shipperstack.appspot.com",
        messagingSenderId: "966530457473",
        appId: "1:966530457473:web:d8af31b2942f8f31d29280",
        measurementId: "G-DGVFYY8KE9"
      }
    },
    {
      use: '~/plugins/gridsome-plugin-graphql-codegen',
      options: {
        configPath: './codegen.yml',
      }
    }
  ]
}
