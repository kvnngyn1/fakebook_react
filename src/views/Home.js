import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        
        return (
            <div>
                <h3>Home Page</h3>
                <hr />

                <form action="." method="POST">
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-10">
                                <input className="form-control" type="text" name='body' placeholder="Your blog post here..." />
                            </div>
                            <div className="col-md-2">
                                <input className="btn btn-info btn-block" type="submit" value="Post" />
                            </div>
                        </div>
                    </div>
                </form>

                <hr />

                <ul className="list-group">
                    { this.props.posts.map( p => (
                        <li key={ p.id } className="list-group-item">
                            <p>
                                <a href=".`">{ p.body }</a>
                            </p>
                            <div>
                                <span>
                                    <cite>&mdash; { p.user.firstName } { p.user.lastName }</cite>
                                    <small className="float-right">{ p.dateCreated }</small>
                                </span>

                            </div>
                        </li>
                    )) }
                </ul>
                
            </div>
        )
    }
}
