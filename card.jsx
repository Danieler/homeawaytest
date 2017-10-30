const cardPics = [
    'https://static.pexels.com/photos/186077/pexels-photo-186077.jpeg',
    'https://i.pinimg.com/736x/7f/be/50/7fbe50ec634c65709d7fe6ac267c4e6f--large-garage-plans-house-plans-large-family.jpg',
    'https://static.pexels.com/photos/164516/pexels-photo-164516.jpeg'

]

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.goToPrevSlide = this.goToPrevSlide.bind(this);
        this.goToNextSlide = this.goToNextSlide.bind(this);

        this.state = {
            activeIndex: 0
        };
    }

    goToPrevSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { pics } = this.props;
        let picsLength = pics.length;

        if (index < 1) {
            index = picsLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    }

    goToNextSlide(e) {
        e.preventDefault();

        let index = this.state.activeIndex;
        let { pics } = this.props;
        let picsLength = pics.length - 1;

        if (index === picsLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    }
    render() {
        return (
            <div className="card">
                <div className="image_container">


                    <i className="arrow --left" onClick={e => this.goToPrevSlide(e)}></i>
                    <i className="arrow --right" onClick={e => this.goToNextSlide(e)}></i>
                    <img  className="image " src={this.props.pics[this.state.activeIndex]}/>
                </div>

                <div className="content">
                    <div className="card_body">
                        <h4 className="card_resume">
                            Luxury, downtown location w pool & spa in coveted Clarksville. Walk just about...
                        </h4>
                        <table className="basic_info">
                            <tbody>
                            <tr>
                                <th> <h5>Sleeps</h5></th>
                                <th>  <h5>Bedrooms</h5></th>
                                <th ><h5>Bathrooms</h5></th>

                            </tr>
                            <tr>
                                <td className="basic_info_value">3.5</td>
                                <td className="basic_info_value"><div className="vertical_grey_line"></div> 3</td>
                                <td className="basic_info_value"><div className="vertical_grey_line"></div>6</td>
                            </tr>
                            </tbody>

                        </table>
                    </div>

                    <div className="card_footer">
                        <div className="card_review"> Wonderful 4.9/5</div>
                        <h4 className="card_price">
                            $862 <span>avg/nigth</span>
                        </h4>

                        <h6 className="card_basic_info_small">2 beds . 3.5 bathrooms . Sleeps 6</h6>

                        <div className="rating">
                            <div className="star-rating">

                                <a href="#">&#9733;</a>
                                <a href="#">&#9733;</a>
                                <a href="#">&#9733;</a>
                                <a href="#">&#9733;</a>
                                <a href="#">&#9733;</a>

                            </div>
                            <span className="reviews_count">10 reviews</span>
                        </div>
                    </div>


                </div>
                <div className="clearfix"></div>
            </div>
        );
    }
}

ReactDOM.render(
    <Card pics={cardPics}/>,
    document.getElementById('cardnode')
);