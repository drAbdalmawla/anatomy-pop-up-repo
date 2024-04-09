let $$ = e => document.createElement(e) ;
let s =  e => document.querySelector(e) ;

$(function(){
    let what_is_wanted = document.querySelector('.what_is_wanted') ;

    $.getJSON('data/data.json' , function(data) {
        let bridge = new Bridge( data , '.what_is_wanted') ;
        bridge.init()
    });
});

class Bridge {
    constructor( data , parent ) {
        this.data = data ;
        this.parent = parent ;
        this.the_wanted_path = [] ;
        // this. ;
    }

    createList( obj ){
        // parent (ul)
        let ul = $$('ul') ;
        // children (li)
        for(let item in obj) {
            let li = document.createElement('li') ;
            let label = $$('label');
                label.textContent = item ;
            let checkbox = $$('input') ;
                checkbox.type  = 'checkbox' ;
                this.the_wanted_path.push(item) ;

            label.insertBefore( checkbox , label.firstChild ) ;
            li.appendChild( label ) ;
            ul.appendChild( li );
            
            // check if there are children = if object ==> (new nested ul)
            if( obj[item].constructor.name == 'Object' ) { 
                checkbox.name = 'object' ;
                li.appendChild( this.createList( obj[item] ) ) ;
            } else {
                // if array
                checkbox.name = 'array' ;
                checkbox.value = this.the_wanted_path
            }
            // for correct the path
            this.the_wanted_path.pop() ;


        }
        return ul ;
    } 
    addCheckboxesListeners() {
        let box = $('main .container .selection .what_is_wanted ul li input[type=checkbox]');
        let path = [ /* status = (t|f) , path */] ;
        
        box.change( e => {
            // push or splice into paths
            if( e.target.name == 'object' ) {
                console.log('check infra arrays')
            } else {
                // .: name == 'array'
                path = [ e.target.checked , e.target.value.split(',') ] ;
                this.order( path );
            }
            
            
        });

    }
    updataParentCheckboxes( childCheckboxes ) {}
    getSelectionOptions() {}
    order = function( paths ){
        let generator = new Generator( this.data , paths ) ;
        generator.generate() ;
    }
    init(){

        let container = document.querySelector('.what_is_wanted') ;
        if( container ) {
            container.appendChild(this.createList( this.data ));
            this.addCheckboxesListeners();
        } else { console.log('no container (root)'); }
    }
}


/* 
mRNA (illusion) ==> is ab array of objects by which the app will generate questions. it is pure objects e.g. 
       [ 
        {sartorius muscle} , 
        {tibialis anterior muscle} ,
        {...}
       ]
*/
let mRNA_outside = [] ;
let removal_ref  = [];
let data_outside ;
class Generator {
    constructor( data , order ) {
        this.order = order ;
        data_outside = data ;
        // this.data = data ;
        // this.mRNA = [] ;
    }

    init_mRNA() {
        if( this.order[0] ) { // push to mRNA
            let path_as_string = 'data_outside' ; this.order[1].forEach( category => path_as_string += `['${ category }']`);
            let code_in_string = `mRNA_outside.push( ...${path_as_string} )`;
            let execute = new Function( code_in_string ) ; execute() ;
            console.log(mRNA_outside)
        } else { // splice from mRNA
            // get objects to remove
            let path_as_string = 'data_outside' ; this.order[1].forEach( category => path_as_string += `['${ category }']`);
            let code_in_string = `removal_ref.push( ...${path_as_string} )`;
            let execute = new Function( code_in_string ) ; execute() ;
            // console.log('remove' , removal_ref)

            // loop on mRNA objects inside removal_ref  , if( object == ref ) { removal_ref.splice(ref,1) ; mRNA.splice(o,1) }
            removal_ref.forEach( ref => {
                // ref = muscle
                mRNA_outside.forEach( o => {
                    // o = muscle, till reach the same muscle
                    if(o.name == ref.name) { mRNA_outside.splice( mRNA_outside.indexOf(o) ,1) }
                })
                
            })
            removal_ref = [] ;
            // console.log(mRNA_outside)

        }
        
    }
    generate() {
        this.init_mRNA() ;
    }
}

/**
 * --------- Bridge ----------
 [ phase 1 ] show
    * loop in data
    * if object => get keys ; 
    *      show in <li> and open <ul>
    * if array  => break ;
    *      show in <li> 
    *      set data = path & status
 [ phase 2 ] style
 [ phase 3 ] send paths from final items
    * on change in check box => push or splice
 */

 /**
  * --------- Generator --------
  [ phase 1 ] reach
    * reach through path

  */













  /*
    ['lower_limb', 'muscle', 'thigh', 'anterior_compartment']
    ['lower_limb', 'nerve']
    ['upper_limb', 'joint']
    ['upper_limb', 'muscle', 'forearm', 'extensors']

    data + [] x n?

    1) stringify & parse (x)
    2) new Function(code) (work!)

    ________________________________________________________________________

    (for remove)
    [ false , ['lower_limb', 'muscle', 'thigh', 'anterior_compartment'] ]
    [
        {name: 'sartoris', origin: 'anterior superior iliac spine', insertion: 'upper medial part of tibia', nerve: 'femoral', action: Array(4)} ,
        {name: 'quadriceps', origin: {…}, insertion: 'tibial tuberosity', nerve: 'femoral', action: {…}}
    ]

    removal_ref.forEach( ref => mRNA_outside.forEach( o => ref.name == o.name ? mRNA_outside.splice( mRNA_outside.indexOf(ref) , mRNA_outside.indexOf(ref) + 1 ) : false )  ) ;
    mRNA_outside.splice( index , removal_ref.length )
    
  */