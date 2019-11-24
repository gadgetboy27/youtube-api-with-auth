// Options 
const CLIENT_ID = '797737878705-c4h4s0k5p50h89104ujj4850471kut6g.apps.googleusercontent.com'
const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest']
const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly'

const authorizeButton = document.getElementById('authorize-button')
const signoutButton = document.getElementById('signout-button')

const content = document.getElementById('content')
const channelForm = document.getElementById('channel-form')
const channelInput = document.getElementById('channel-input')
const videoContainer = document.getElementById('video-container')
