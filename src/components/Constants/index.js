export const buttonOptions = [
  {
    name: 'Sprinkles',
    action: 'sprinkles',
  },
  {
    name: 'Filled',
    action: 'filled'
  },
  {
    name: 'Add',
    action: 'addDonut'
  },
  {
    name: 'Remove',
    action: 'deleteDonut'
  },
  {
    name: 'Flavor',
    action: 'changeFlavor'
  }
];

export const flavorOptions= [
    {
      name: 'Cherry',
      action: 'cherry'
    },
    {
      name: 'Glazed',
      action: 'glazed'
    },
    {
      name: 'Chocolate',
      action: 'chocolate'
    },
    {
      name: 'Maple',
      action: 'maple'
    }
];


export const mockData = {
  boxes: [{
    name: "Zubair's Order",
    donuts: [
      {
        flavor: 'chocolate',
        sprinkles: true,
        filled: true,
        donutId: '121'
      },
      {
        flavor: 'maple',
        sprinkles: true,
        filled: false,
        donutId: '129'
      },
      {
        flavor: 'cherry',
        sprinkles: true,
        filled: false,
        donutId: '122'
      },
      {
        flavor: 'chocolate',
        sprinkles: false,
        filled: true,
        donutId: '1223'
      },
      {
        flavor: 'maple',
        sprinkles: true,
        filled: false,
        donutId: '125'
      },
      {
        flavor: 'glazed',
        sprinkles: false,
        filled: false,
        donutId: '124'
      },
      {
        flavor: 'chocolate',
        sprinkles: false,
        filled: true,
        donutId: '1233'
      },
      {
        flavor: 'maple',
        sprinkles: true,
        filled: false,
        donutId: '1254'
      },
      {
        flavor: 'chocolate',
        sprinkles: false,
        filled: false,
        donutId: '1245'
      },
      {
        flavor: 'glazed',
        sprinkles: false,
        filled: true,
        donutId: '1236'
      },
      {
        flavor: 'maple',
        sprinkles: true,
        filled: false,
        donutId: '1257'
      },
      {
        flavor: 'chocolate',
        sprinkles: false,
        filled: false,
        donutId: '1248'
      }
    ],
    nameId: 'r123'
  },
  {
    name: "Kim's Order",
    donuts: [
      {
        flavor: 'chocolate',
        sprinkles: false,
        filled: true,
        donutId: '12223'
      },
      {
        flavor: 'maple',
        sprinkles: true,
        filled: false,
        donutId: '125'
      },
      {
        flavor: 'chocolate',
        sprinkles: false,
        filled: false,
        donutId: '124'
      }
    ],
    nameId: 'r124'
  },
    {
      name: "Nik's Order",
      donuts: [
        {
          flavor: 'chocolate',
          sprinkles: false,
          filled: true,
          donutId: '123'
        },
        {
          flavor: 'maple',
          sprinkles: true,
          filled: false,
          donutId: '125'
        },
        {
          flavor: 'glazed',
          sprinkles: false,
          filled: false,
          donutId: '1288884'
        },
        {
          flavor: 'chocolate',
          sprinkles: false,
          filled: true,
          donutId: '1234653'
        },
        {
          flavor: 'maple',
          sprinkles: true,
          filled: false,
          donutId: '121115'
        },
        {
          flavor: 'glazed',
          sprinkles: false,
          filled: false,
          donutId: '1999924'
        }
      ],
      nameId: 'r129'
    }
  ]
};
