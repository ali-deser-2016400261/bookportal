import React from 'react';

function ShoppingTitle(props){
return(
<div>
<h1>{(props.title)}</h1>
<h2>Number of Items: {props.numItems}</h2>
</div>)
}

function ListItem(props){
const content = props.isBold ? <b>{props.item}</b> : props.item;

return<li>{content}</li>;

}

function ShoppingList(props){
return ( <div> 
<h3>{props.header}</h3>

<ol>
{props.items.map(function(item,i){
return <ListItem key={i}  item={item} isBold={i === 1} /> 
})
}
</ol>   




</div>)}

function ShoppingApp(props){



const data = {
title: "MyShopping List",
categories: [
{
    header: "Food",
    items: ["Apple", "Bread", "Cheese", "Banana"]

},
{
    header: "Clothes",
    items: ["Shirt", "Pants", "Tie"]

},
{
    header: "Supplies",
    items: ["Pen","Paper","Scissors"]

},
]
};
const numItems = data.categories.reduce((start, category) => {
return category.items.length +start;
},0);

return (
<div>
<ShoppingTitle title={data.title} numItems={numItems} />

{data.categories.map(function(category,i){
    return (
        <ShoppingList
            key={1}
            header={category.header}
            items={category.items}
            />
                    
    );
})}
</div>
);
}



// return (<div>
//     <ShoppingTitle title= "MyShoppingList" numItems ="9"/>
//     <ShoppingList header = "Food" numItems= "4" items= {["Apple" ,"Bread" ,"Cheese", "California"]}/>
//     <ShoppingList header = "Clothes" items= {["Shirts","Pants","Hat"]}/>
//     <ShoppingList header = "Supplies" items= {["Pen","Paper","Glue"]}/>
//     </div>)
//     }





export default ShoppingApp;