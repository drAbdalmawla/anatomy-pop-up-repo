$.getJSON('data/data.json' , function( data ) {
    // loop on data
    // get keys to use
    // separate to child objects
    let parent = $$('ul') ; ;
    function separate_children( obj , par ) {
        if( obj.constructor.name == 'Object' ) {
            
            Object.keys( obj ).forEach( key => {
                let child = $$('li') ;
                child.innerText = key ;
                par.appendChild( child ) ;
                
                let sub_parent = $$('ul');
                separate_children( obj[key] , sub_parent );
                parent.appendChild(sub_parent)
            });
            what_is_wanted.appendChild( parent )
        } else {
            console.log( obj )
        }
    }
    separate_children( data , parent );
    /*
    let parent = $$('ul') ;
        // set value
        Object.keys( obj ).forEach( key => {
            let child = $$('li') ;
                child.innerText = key ;
            parent.appendChild( child ) ;
            //  if there are children
            separate_children( obj[key] ) ;
            
        });
    */
    /*
    ul (parent)
      li 'limb'
      // if there are children
      ul (parent)
    */
});

// ================================================================================================
let path_as_string = 'data_outside' ;
            this.order[1].forEach( category => path_as_string += `['${ category }']`);
            let code_in_string = `removal_ref = ${path_as_string}`;
            let execute = new Function( code_in_string ) ;
            execute() ; 
            console.log('remove' , removal_ref );

            mRNA_outside.forEach( (o , i) => {
                removal_ref.forEach( ref => {
                    ref.name == o.name ? mRNA_outside.splice( mRNA_outside.indexOf( o ) , 1 ) : false ;
                })
            })
            
            // removal_ref.forEach( ref => {
            //     removal_ref.pop();
            //     mRNA_outside.forEach( o => {
            //         ref.name == o.name ? mRNA_outside.splice( mRNA_outside.indexOf(ref) , mRNA_outside.indexOf(ref) + 1 ) : false ;
            //     })  
            // });
            console.log(mRNA_outside)
            
  
// generation function content before planning to flash card         
this.init_mRNA();
let type = 'insertion';
let index = 0;
let central = mRNA_outside[index];
let obj = central;
let peripheral = new Set();
peripheral.add(mRNA_outside[index + 1]);
peripheral.add(mRNA_outside[index + 2]);
//peripheral.add(mRNA_outside[index + 3]) ;



let question = `${ type } of ${ obj.name }`
let trueAnswer = obj[type]
let falseAnswers = [];
for (let i = 0; i < 3; i++) {
  peripheral.forEach(o => {
    falseAnswers.push(o)
  });
  //falseAnswers.push( peripheral[i][type] ) ;
}
console.log(question, trueAnswer, falseAnswers)
// make question
//  { text , trueAnswer } =
//console.log(this.make_question(central).trueAnswer());


// up dating check boxes
box.change(e => {
    // is category or data container = is {object} or [array]
    if (e.target.name == 'object') {
      /**
       * this navigation with DOM depends on the following structure
       li
        lable
          input[type=checkbox name=object] 'catigory name'
        ul
          li
            lable
              input[type=checkbox name=array] 'compartment name'
       */
      e.target.parentNode.nextSibling.childNodes.forEach( li => {
        let status = li.firstChild.firstChild.checked ;
        status = !status ;
        li.firstChild.firstChild.click() ;
        
      } ) ;
    } else {
      // .: name == 'array'
    
      path = [e.target.checked, e.target.value.split(',')];
      this.order(path);
    }


  });