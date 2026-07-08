function Message() {
    const name = "Paul"

    if (name) {
        return <h1> Hello Everybody, my name is {name} </h1>
    }
    return <h1> Hello Everybody, my name is Markiplier </h1>
}

export default Message;