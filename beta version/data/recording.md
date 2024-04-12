# `* problems *`

# index
    generator.index >= mRNA_outside.length - 1 ? generator.index = 0 :  generator.index++ ;

# if data is []
    result.answer = () => {
      if (object[type].constructor.name == 'Object') {
        console.log(object[type] , object.name , 'is object = heads')
      } 
      else if (object[type].constructor.name == 'Array') {
        


        let points = '<ol>' ;
        object[type].forEach(function( point ) {
          points += `<li> ${ point } </li>`;
        });
        points += `</ol>`;

        return points ;




      } 
      else if (object[type].constructor.name == 'String' ) {
        return object[type].replace('(or)' , '<span class=tip> in other words </span>');
      } 
      else {
        console.log(object[type].constructor.name)
      }
    }
    
# pushing lesion
    remove // this.init_mRNA(); from the generate methode

____________________________________________________________________
# i want to list objects of json data in nested ul

    
    
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

                if( obj[item].constructor.name == 'Object' ) { 
                    // missing
                } 

                what_is_wanted.appendChild( parent )
            } else {
                console.log( obj )
            }
        }
        separate_children( data , parent );
....................................................................
Object.keys( obj ).forEach ==> for( in )
solution ==> return ul & li.appendChild( f( data[key] ) )


____________________________________________________________________

# i wanted to execute js code inside string 
`so i had to use ==> new Function(code) & mRNA , data are outside class now`

    let mRNA = [] ;
    let d ;
    class Generator {
        constructor( data , order ) {

            this.order = order ;
            this.data = data ;
            d = data ;
            /* mRNA (illusion) ==> is ab array of objects by which the app will generate questions. it is pure objects
            e.g. 
            [ 
                {sartorius muscle} , 
                {tibialis anterior muscle} ,
                {...}
            ]
            */
            // this.mRNA = [] ;
        }
        init_mRNA() {
            if( this.order[0] ) { // push to mRNA
                let path_as_string = 'this.data' ;
                this.order[1].forEach( category => path_as_string += `['${ category }']`);
                let code_in_string = `mRNA.push( ${path_as_string} )`;
                let execute = new Function( code_in_string ) ;
                execute() ;
                console.log(mRNA)
            } else { // splice from mRNA
            
            }
            
        }
        generate() {
            this.init_mRNA() ;
        }
    }





{ solved (Thanks Allah) }

1) the more you plane , the less time you waste
    * design => used figma
    https://www.figma.com/file/kggRjLZHmqyH6ATt1lMOjZ/anatomy-pop-up?type=design&node-id=0%3A1&mode=design&t=aCAttDtP2CVHpghP-1

    * programming => code = the last step , plane first

    * it is not very important to imagine the whole structure of app mechanism => simply you can not
    .: work on the part = if it got complex , analyse