import React from "react";
import Navbar from "../components/Navbar";
import Jumbtron from "../components/Jumbotron";
import Footer from "../components/Footer";
import "./ChatForm.css";
import Jumbotron from "../components/Jumbotron";

class ChatForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatData: [],
      message: ""
    };
  }

  componentDidMount() {
    let chatData = [
      {
        type: "sent",
        image: "http://emilcarlsson.se/assets/mikeross.png",
        message:
          "A hook does not match a normal human hand for appearance or overall versatility!"
      },
      {
        type: "replies",
        image: "http://emilcarlsson.se/assets/harveyspecter.png",
        message:
          "When youre backed against the wall, break the thing down."
      },
      {
        type: "replies",
        image: "http://emilcarlsson.se/assets/harveyspecter.png",
        message: "Excuses dont win championships."
      },
      {
        type: "sent",
        image: "http://emilcarlsson.se/assets/mikeross.png",
        message: "Oh yeah, did Michael Jordan tell you that?"
      },
      {
        type: "replies",
        image: "http://emilcarlsson.se/assets/harveyspecter.png",
        message: "No, I told him that."
      },
      {
        type: "replies",
        image: "http://emilcarlsson.se/assets/harveyspecter.png",
        message: "No, I told him that."
      },
      {
        type: "sent",
        image: "http://emilcarlsson.se/assets/harveyspecter.png",
        message:
          "What are you talking about? I need a prosthetic hand."
      },
      {
        type: "replies",
        image: "http://emilcarlsson.se/assets/harveyspecter.png",
        message:
          "I live in the Netherlands. Can you ship it here?"
      }
    ];
    this.setState({ chatData });
  }

  renderChat() {
    return this.state.chatData.map(chat => {
      return (
        <li className={chat.type}>
          <img src={chat.image} />
          <p>{chat.message}</p>
        </li>
      );
    });
  }

  handleMessage() {
    let chatData = this.state.chatData;
    let message = this.state.message;
    let newMessage = {
      type: "sent",
      image: "http://emilcarlsson.se/assets/harveyspecter.png",
      message
    };
    chatData.push(newMessage);
    this.setState({ chatData, message: "" });
  }

  render() {
    return (
      <>
        <Navbar />
        <Jumbotron title="Chat Room" subtitle="Talk to other users" />
        <div>
          <div className="chat-container">
            <h2 id="connect-chat">Connect with donors, accept, and track donations online with this online chat tool!</h2>
            <h3 id="chat-here">Chat Here</h3>
            <p id="join">
              Join or start any conversation in the world with a simple chat message.
            </p>
            {/* <p>
			<div class="row d-flex justify-content-center">

  
<div class="col-md-6">


  <div class="embed-responsive embed-responsive-16by9 mb-4">
	<iframe class="embed-responsive-item" src="" allowfullscreen></iframe>
  </div>

</div>

</div>

            </p> */}
          </div>
        </div>
        <div id="frame">
          <div id="sidepanel">
            <div id="profile">
              <div className="wrap">
                <img
                  id="profile-img"
                  src="http://emilcarlsson.se/assets/mikeross.png"
                  className="online"
                  alt=""
                />
                <p>Mike Ross</p>
                <i
                  className="fa fa-chevron-down expand-button"
                  aria-hidden="true"
                />
                <div id="status-options">
                  <ul>
                    <li id="status-online" className="active">
                      <span className="status-circle" /> <p>Online</p>
                    </li>
                    <li id="status-away">
                      <span className="status-circle" /> <p>Away</p>
                    </li>
                    <li id="status-busy">
                      <span className="status-circle" /> <p>Busy</p>
                    </li>
                    <li id="status-offline">
                      <span className="status-circle" /> <p>Offline</p>
                    </li>
                  </ul>
                </div>
                <div id="expanded">
                  <label>
                    <i className="fa fa-facebook fa-fw" aria-hidden="true" />
                  </label>
                  <input name="twitter" type="text" value="mikeross" />
                  <label>
                    <i className="fa fa-twitter fa-fw" aria-hidden="true" />
                  </label>
                  <input name="twitter" type="text" value="ross81" />
                  <label>
                    <i className="fa fa-instagram fa-fw" aria-hidden="true" />
                  </label>
                  <input name="twitter" type="text" value="mike.ross" />
                </div>
              </div>
            </div>
            <div id="search">
              <label>
                <i className="fa fa-search" aria-hidden="true" />
              </label>
              <input type="text" placeholder="Search contacts..." />
            </div>
            <div id="contacts">
              <ul>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img
                      src="http://emilcarlsson.se/assets/louislitt.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Louis Litt</p>
                      <p className="preview">You just got LITT up, Mike.</p>
                    </div>
                  </div>
                </li>
                <li className="contact active">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/harveyspecter.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Harvey Specter</p>
                      <p className="preview">
					  A transradial prosthesis is an artificial limb that replaces an arm missing below the elbow.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status away" />
                    <img
                      src="http://emilcarlsson.se/assets/rachelzane.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Rachel Zane</p>
                      <p className="preview">
                        I need a Lower-extremity prostheses.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status online" />
                    <img
                      src="http://emilcarlsson.se/assets/donnapaulsen.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Donna Paulsen</p>
                      <p className="preview">
                        Mike, I know what you need! I'm Donna..
                      </p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/jessicapearson.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Jessica Pearson</p>
                      <p className="preview">
                        Have you finished the draft on the Hinsenburg deal?
                      </p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img
                      src="http://emilcarlsson.se/assets/haroldgunderson.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Harold Gunderson</p>
                      <p className="preview">Thanks Mike!</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img
                      src="http://emilcarlsson.se/assets/danielhardman.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Daniel Hardman</p>
                      <p className="preview">
                        We'll meet again, Mike. Tell Jessica I said 'Hi'.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status busy" />
                    <img
                      src="http://emilcarlsson.se/assets/katrinabennett.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Katrina Bennett</p>
                      <p className="preview">
                        I've sent you the files for the transfemoral prosthesis.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img
                      src="http://emilcarlsson.se/assets/charlesforstman.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Charles Forstman</p>
                      <p className="preview">Mike, this isn't over.</p>
                    </div>
                  </div>
                </li>
                <li className="contact">
                  <div className="wrap">
                    <span className="contact-status" />
                    <img
                      src="http://emilcarlsson.se/assets/jonathansidwell.png"
                      alt=""
                    />
                    <div className="meta">
                      <p className="name">Jonathan Sidwell</p>
                      <p className="preview">
                        <span>You:</span> That's not true. This deal is solid.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div id="bottom-bar">
              <button id="addcontact">
                <i className="fa fa-user-plus fa-fw" aria-hidden="true" />{" "}
                <span>Add contact</span>
              </button>
              <button id="settings">
                <i className="fa fa-cog fa-fw" aria-hidden="true" />{" "}
                <span>Settings</span>
              </button>
            </div>
          </div>
          <div className="content">
            <div className="contact-profile">
              <img
                src="http://emilcarlsson.se/assets/harveyspecter.png"
                alt=""
              />
              <p>Harvey Specter</p>
              <div className="social-media">
                <i className="fa fa-facebook" aria-hidden="true" />
                <i className="fa fa-twitter" aria-hidden="true" />
                <i className="fa fa-instagram" aria-hidden="true" />
              </div>
            </div>
            <div className="messages">
              <ul>{this.renderChat()}</ul>
            </div>
            <div className="message-input">
              <div className="wrap">
                <input
                  type="text"
                  placeholder="Write your message..."
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                />
                <i className="fa fa-paperclip attachment" aria-hidden="true" />
                <button onClick={() => this.handleMessage()} className="submit">
                  <i className="fa fa-paper-plane" aria-hidden="true" />Send
                </button>
				<div> <div class="container">



</div></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default ChatForm;
