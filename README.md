How to start?

1. Start server - npm run start:server
2. Start app - npm start

App architecture

- db.json acts as a storage for the fake server that hosted on localhost//8000
- the app is located on default host localhost//3000
- index js simply renders App.js
- App.js is located in the component folder. App.js acts as a parent component
  for all other components. It contains API requests () and handlers to
  close/open modal, and to EditPost (Edit func gets passed to the Modal
  Component and Post Component). It also contains all routes. Right now it acts
  as a "HomePage" also.
- Navbar contains links to AddHomePage and About
- About is just an empty page right now (needs to be modified to the
  page-for-one-post in the nearest future)
- PostList gets props {posts, onDelete, onEdit} from app, renders list of Posts
  and gives {posts, onDelete, onEdit} to the Post.
- Post (Class Componets) receives {posts, onDelete, onEdit} from PostList and
  creates one Post where a User can Delete and Edit a post and send the data
  back to App for handling.
- AddPost (Class Component) component receives onAddPost property, collect data
  from a User and sends the data back to App for API requests like POST and
  DELETE.
- ModalComponent (Class Component) - acts as the "Editor Mode". It receives
  props (onEdit) and data from App and sends it back to App for PUT request.
- Styling is not the best, but it's done with styled-components.
