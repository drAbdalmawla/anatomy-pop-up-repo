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