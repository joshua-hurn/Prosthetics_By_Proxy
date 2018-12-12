// class ChatForm extends Component {

//     constructor(props) {
//       super(props);

//       this.state = {

//                 messages: []
//         }
//       }
//     }
  
//     componentDidMount() {
//       let data = this.state.data
//       setTimeout(() => {
//         this.refs.author.refs.input.focus()
//       }, 100)
//       const socket = io()
//       Cosmic.getObjects(config, (err, res) => {
//         const messages = res.objects.type.messages
//         if (messages) {
//           messages.reverse()
//           this.setState({
//             data: {
//               class: " ",
//               image: " ",
//               message
//             }
//           })
//         }
//       })
    
//     componentDidUpdate() {
//       if (this.refs.message)
//         this.refs.message.refs.input.focus()
//       if (this.refs.messages_scroll_area)
//         this.refs.messages_scroll_area.scrollTop = this.refs.messages_scroll_area.scrollHeight
//     }
  
//     setAuthor() {
//       const author = this.refs.author.refs.input.value.trim()
//       if (!author)
//         return
//       this.refs.author.refs.input.value = ''
//       const messages = this.state.data.messages
//       this.setState({
//         data: {
//           class: " ",
//           image: " ",
//           messages
//         }
//       })
//     }
  
//     createMessage() {
//       const data = this.state.data
//       const messages = data.messages
//       const socket = io()
//       const message_text = this.refs.message.refs.input.value.trim()
//       if (!message_text)
//         return
//       const message_emit = {
//         message: message_text,
//         author: data.author
//       }
//       // Send message out
//       socket.emit('chat message', message_emit)
//       // Render to browser
//       const message_browser = {
//         _id: uuid.v1(),
//         metafield: {
//           class: {
//             value: data.class
//           },
//           {
//             image: {
//                 value: Image
//             },
//           {
//           message: {
//             value: message_text
//           }
//         }
//       }
//       messages.push(message_browser)
//       this.setState({
//         data: {
//             class: data.class
//             value:image,
//             message: message_text,
            
//         }
//       })
//       this.refs.message.refs.input.value = ''
//     }
  
//     handleSubmit(e) {
//       e.preventDefault()
//       const data = this.state.data
//       if (data.author)
//         this.createMessage()
//       else
//         this.setAuthor()
//     }
  
//     render() {
    
//       const messages = data.messages
//       let messages_list
//       if (messages) {
//         // order by created
//         const sorted_messages = _.sortBy(messages, message => {
//           return message.created
//         })
//         messages_list = sorted_messages.map(message_object => {
//           if (message_object) {
//             return (
//               <li style={ { listStyle: 'none', ...S('mb-5') } } key={ message_object._id }>
//                 <b>{ message_object.metafield.class.value }</b><br/>
//                 { message_object.metafield.message.value }
//               </li>
//             )
//           }
//         })
//       }
//       const scroll_area_style = {
//         ...S('h-' + (window.innerHeight - 140)),
//         overflowY: 'scroll'
//       }
//       return (
//         <div>
//           <div style={ S('pl-15') }>
//             <h2>React Chat App</h2>
//             <div ref="messages_scroll_area" style={ scroll_area_style }>
//               <ul style={ S('p-0') }>{ messages_list }</ul>
//             </div>
//           </div>
//           <div style={ S('absolute b-0 w-100p pl-15 pr-15') }>
//             <form onSubmit={ this.handleSubmit.bind(this) }>
//               { form_input }
//             </form>
//           </div>
//         </div>
//       )
//     }
//   }
  