<template>
    <font-awesome-icon :icon="icon" :size="size" :color="color" />
  </template>
  
  <script>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { library } from '@fortawesome/fontawesome-svg-core';
  import { faFileInvoice,faBars,faWallet,faSquarePlus,faCreditCard,faEnvelope,faRotate,faUser,faChevronDown } from '@fortawesome/free-solid-svg-icons';

  
  // Add icons to the library for easy retrieval
  library.add(faFileInvoice, faBars,faWallet,faSquarePlus,faCreditCard,faEnvelope,faRotate,faUser,faChevronDown);
  
  export default {
    name: 'IconContent',
    components: {
      FontAwesomeIcon
    },
    props: {
      icon: {
        type: String,
        required: true
      },
      size: {
        type: String,
        default: '1x'
      },
      color: {
        type: String,
        default: 'currentColor'
      }
    }
  };
  </script>
  