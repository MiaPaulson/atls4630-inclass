export default function MyList() {
    const items = [
        {text: "Hello I'm item 1!", id: 1},
        {text: "Hello I'm item 2!", id: 2},
        {text: "Hello I'm item 3!", id: 3},
    ];
    const mappedItems = items.map(item => 
        // always include key when rendering list in react!!!!
        <li key={item.id}>{item.text}</li>
    );

    return (
        <ul>
            {/* could just put the variable information above in brackets here instead of mappedItems */}
            {mappedItems}
        </ul>
    );
}