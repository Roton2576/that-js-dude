const users = [
     {
          title: 'React Tutorial',
          des: 'This is a React Tutorial Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'Javascript Tutorial',
          des: 'This is a Javascript Tutorial Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'PHP Tutorial',
          des: 'This is  PHP Tutorialas Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'Python Tutorial',
          des: 'This is Number One Language of Programming Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'Express Tutorial',
          des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'Node Tutorial',
          des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'PSD to HTML Tutorial',
          des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'CSS3 Tutorial',
          des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     },

     {
          title: 'Bootstrap Tutorial',
          des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsum soluta molestiae itaque quisquam ad eum aliquam cum exercitationem explicabo.'
     }
    
];



function loadTuturials() {

     let setHtmlHate = ``;

     users.map(user => setHtmlHate += `
     
          <div>
               <h2> ${user.title} </h2>
               <p> ${user.des} </p>
               <button>View Details</button>
          </div> 
          
     `);

     document.getElementById('left-part-dis-div').innerHTML = setHtmlHate;

}
loadTuturials();