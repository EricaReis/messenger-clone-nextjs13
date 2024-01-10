## About the APP:

This is a repository for a Real-Time Messenger Clone: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher.
Key Features:

- Real-time messaging using Pusher
- Message notifications and alerts
- Tailwind design for sleek UI
- Tailwind animations and transition effects
- Full responsiveness for all devices
- Credential authentication with NextAuth
- Google authentication integration
- Github authentication integration
- File and image upload using Cloudinary CDN
- Client form validation and handling using react-hook-form
- Server error handling with react-toast
- Message read receipts
- Online/offline user status
- Group chats and one-on-one messaging
- Message attachments and file sharing
- User profile customization and settings
- Handling relations between Server and Child components in a real-time environment
- Chat rooms and channels

- ### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/EricaReis/messenger-clone-nextjs13.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
DATABASE_URL=
NEXTAUTH_SECRET=

NEXT_PUBLIC_PUSHER_APP_KEY=
PUSHER_APP_ID=
PUSHER_SECRET=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

GITHUB_ID=
GITHUB_SECRET=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### Setup Prisma

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Developer

 <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/43284359?s=460&u=d0283f2331fb2e66792ff944985f576defbcfb77&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Érica Beatriz dos Reis</b></sub>

ericabeatrizdosreis@gmail.com


## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
