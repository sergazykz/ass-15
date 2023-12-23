<template>
    <div class="user-profile" :style="{ width: size, height: size }">
      <img :src="src" :alt="alt" class="profile-image" />
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserProfileImage',
    props: {
      src: {
        type: String,
        required: true,
      },
      alt: {
        type: String,
        default: 'User Profile',
      },
      size: {
        type: String,
        default: '100px',
      },
    },
  };
  </script>
  
  <style scoped>
  .user-profile {
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    line-height: 0;
  }
  
  .profile-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  </style>
  