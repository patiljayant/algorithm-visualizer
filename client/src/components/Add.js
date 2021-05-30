const Add = (col,lis,msg) => {
    const c = col.map(c=> c);
    const l = lis.map(l => l);
    
    return {
        list : l,
        color : c,
        msg: msg
    }
}

export default Add;