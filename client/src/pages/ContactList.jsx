class ContactList extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

updateSearch(event) {
    this.setState({search: event.target.value.subtr(0,
        20)});
}

    render() {
        return (
            <div>
                <ul>
                    {this.props.contacts.map((contact) => }
                        return <Contact contact={contact}
                            key={contact.id}/>
                    })}
                </ul>
                <input type="text"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}/>
            </div>
        )
    }