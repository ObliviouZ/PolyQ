var items = [
  {
    type: "text",
    title: "Nucleus",
    description: "Cell nucleus contains all of the cell's genome, except for the small amount of mitochondrial DNA.<br><br>Huntingtin is found within the nucleus.",
    position: {
      left: 270,
      top: 120
    },
    // sticky: true
  },
  {
    type: "text",
    title: "Cytoplasm",
    description: "Cytoplasm is the gelatinous liquid that fills the inside of a cell. It is composed of water, salts, and various organic molecules.<br><br>Huntingtin has been found several times within the cytoplasm.",
    position: {
      left: 90,
      top: 200
    },
  },
];

var options = {
  allowHtml: true
};

var itemsPhone = [
  {
    type: "text",
    title: "Nucleus",
    description: "Cell nucleus contains all of the cell's genome, except for the small amount of mitochondrial DNA.<br><br>Huntingtin is found within the nucleus.",
    position: {
      left: 150,
      top: 60
    },
    // sticky: true
  },
  {
    type: "text",
    title: "Cytoplasm",
    description: "Cytoplasm is the gelatinous liquid that fills the inside of a cell. It is composed of water, salts, and various organic molecules.<br><br>Huntingtin has been found several times within the cytoplasm.",
    position: {
      left: 60,
      top: 100
    },
  },
];

var itemsAlmostTablet = [
  {
    type: "text",
    title: "Nucleus",
    description: "Cell nucleus contains all of the cell's genome, except for the small amount of mitochondrial DNA.<br><br>Huntingtin is found within the nucleus.",
    position: {
      left: 200,
      top: 90
    },
    // sticky: true
  },
  {
    type: "text",
    title: "Cytoplasm",
    description: "Cytoplasm is the gelatinous liquid that fills the inside of a cell. It is composed of water, salts, and various organic molecules.<br><br>Huntingtin has been found several times within the cytoplasm.",
    position: {
      left: 90,
      top: 120
    },
  },
];


  $(document).ready(function() {
    if ($(window).width()>1200) {
      $("#my-interactive-image").interactiveImage(items, options);
    } else if ($(window).width()<500){
      $("#my-interactive-image").interactiveImage(itemsPhone, options);
    } else if ($(window).width()>500 && $(window).width()<768){
      $("#my-interactive-image").interactiveImage(itemsAlmostTablet, options);
    }
  });
