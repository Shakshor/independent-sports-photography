import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <div>
            <h2>Answer the Questions..</h2>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Differences between authorization and authentication?</Accordion.Header>
                    <Accordion.Body>
                        Authentication is a process for verifying user who you are by providing some credentials like user name, password, face scan, retina scan etc..
                        On the other hand, Authorization is the process in which areas an authenticated user have access to go. The process is done after authentication.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Why are your using firebase? What other options do you have to implement authentication?</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <li> First authentication and database process is hard for a developer. It consumes a lot of time . This process has done easier for the developer by firebase providing database and google features. Secondly Firebase is more secure than creating our own authentication system.
                                Besides developers don't need to configure servers using firebase.Everything will be taken care by firebase automatically.
                            </li>
                            <li>
                                The other options I have for authentication
                                <ol>
                                    <li>Auth 0.</li>
                                    <li>Okta</li>
                                    <li>MongoDB</li>
                                    <li>Passport</li>
                                </ol>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>What other services does firebase provide other than authentication?</Accordion.Header>
                    <Accordion.Body>
                        <li>The other services firebase provides:
                            <ol>
                                <li>Realtime Database</li>
                                <li>Authentication</li>
                                <li>Storage</li>
                                <li>Hosting</li>
                                <li>Cloud Messaging</li>
                            </ol>
                        </li>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;