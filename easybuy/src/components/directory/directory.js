import React, { Component } from 'react';
import MenuItem from "../menu-item/menu-item";
import './directory.scss';


class Directory extends React.Component {
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'Home & Living',
                  imageUrl: 'https://images.unsplash.com/photo-1556020685-ae41abfc9365?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                  id: 1,
                  linkUrl: 'shop/home'
                },
                {
                  title: 'Electronics',
                  imageUrl: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80',
                  id: 2,
                  linkUrl: 'shop/electronics'
                },
                {
                  title: 'Automotive',
                  imageUrl: 'https://images.unsplash.com/photo-1539799139339-50c5fe1e2b1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80.png',
                  id: 3,
                  linkUrl: 'shop/automotive'
                },
                {
                  title: 'womens Wear',
                  imageUrl: 'https://images.unsplash.com/photo-1574721569234-c85f77aaefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=963&q=80',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens',
                },
                {
                  title: 'mens wear',
                  imageUrl: 'https://images.unsplash.com/photo-1543960713-7538001f7c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }]
        }
    }

render(){
    return (
        <div className="directory-menu">
            {
            this.state.sections.map(({title, imageUrl, id, size, linkUrl}) => (
                <MenuItem  key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} />
            ))}
        </div>
    )}
}

export default Directory;