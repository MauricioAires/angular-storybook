export default [
  {
    title: 'Personal',
    description: 'perfect plan for Starters',
    iconColor: 'red',
    price: 'Free',
    buttonLabel: 'Current Plan',
    buttonColor: 'black',
    subscriptionTime: 'lifetime',
    items: [
      {
        title: 'Unlimited Projects',
        active: true
      },
      {
        title: 'Share with 5 team members',
        active: true
      },
      {
        title: 'Sync across devices',
        active: true
      },
      {
        title: 'Admin tools',
        active: false
      }
    ]
  },
  {
    title: 'Team',
    recommended: true,
    description: 'Your entire team in one place',
    iconColor: 'white',
    price: 99.87,
    buttonLabel: 'Try for Free',
    buttonColor: 'blue',
    subscriptionTime: 'year',
    items: [
      {
        title: 'Everything in Pro Plan',
        active: true
      },
      {
        title: 'Unlimited team members',
        active: true
      },
      {
        title: 'Collaborative workspace',
        active: true
      },
      {
        title: 'Admin tools',
        active: true
      }
    ]
  },
  {
    title: 'Enterprise',
    description: 'Run your company on your terms',
    iconColor: 'blue',
    price: 'Custom',
    buttonLabel: 'Contact Us',
    buttonColor: 'blue',
    subscriptionTime: 'custom',
    items: [
      {
        title: 'Everything in Pro Plan',
        active: true
      },
      {
        title: 'Unlimited team members',
        active: true
      },
      {
        title: 'Collaborative workspace',
        active: true
      },
      {
        title: 'Admin tools',
        active: true
      },
      {
        title: 'SAML SSO',
        active: true
      },
      {
        title: 'User provisioning (SCIM)',
        active: true
      }
    ]
  }
]
