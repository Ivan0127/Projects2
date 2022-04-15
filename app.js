let data = [
    {
      name: 'pizza',
      price: '$10'
    },
    {
      name: '12 pc wings',
       price: '$12'
    },
    {
      name: '3 pc tacos',
      price: '$4'
    },
    {
      name: 'blt',
      price: '$5'
    },
    {
      name: 'unreasonably priced burger ',
      price: '$22,000'
    },
    {
      name: 'can of soda',
      price: '$1'
    }
  ];

  const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'costs ' + item.price +'</div>';
});

info.innerHTML = details.join('\n');