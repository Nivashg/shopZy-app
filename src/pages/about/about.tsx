import about from '../../assets/about.jpg';
import story from '../../assets/story.jpg';
import mission from '../../assets/mission.jpg';
import "./about.scss"
import Footer from '../../components/footer/footer';

function About(){
    return(
        <div className='aboutcontainer'>
            <div>
                <img src={about}/>
                <p className='subword'>About</p>
            </div>
            <div className='aboutcontent'>
                <div>
                    <p><span>Our story</span> <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris consequat consequat enim, non auctor massa ultrices non. 
                        Morbi sed odio massa. Quisque at vehicula tellus, sed tincidunt augue.
                        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                        Maecenas varius egestas diam, eu sodales metus scelerisque congue. 
                        Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                        Maecenas gravida justo eu arcu egestas convallis. Nullam eu erat bibendum, tempus ipsum eget, dictum enim. 
                        Donec non neque ut enim dapibus tincidunt vitae nec augue. Suspendisse potenti. Proin ut est diam.
                        Donec condimentum euismod tortor, eget facilisis diam faucibus et. Morbi a tempor elit. <br /><br />
                        Donec gravida lorem elit, quis condimentum ex semper sit amet. Fusce eget ligula magna.
                        Aliquam aliquam imperdiet sodales. Ut fringilla turpis in vehicula vehicula. 
                        Pellentesque congue ac orci ut gravida. Aliquam erat volutpat. 
                        Donec iaculis lectus a arcu facilisis, eu sodales lectus sagittis. 
                        Etiam pellentesque, magna vel dictum rutrum, neque justo eleifend elit, vel tincidunt erat arcu ut sem. 
                        Sed rutrum, turpis ut commodo efficitur, quam velit convallis ipsum, et maximus enim ligula ac ligula. <br /><br />
                        Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879
                        </p>
                    <div className='imgcontainer'><div className='innnercontainer'><img src={story}/></div></div>
                </div>  
                <div >
                    <div className='imgcontainer missionimg'><div className='innnercontainer'><img src={mission}/></div></div>
                    <div className='lowerarea'>
                    <p><span>Our Mission</span> <br />Mauris non lacinia magna. Sed nec lobortis dolor. 
                    Vestibulum rhoncus dignissim risus, sed consectetur erat. 
                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    Nullam maximus mauris sit amet odio convallis, in pharetra magna gravida. 
                    Praesent sed nunc fermentum mi molestie tempor. Morbi vitae viverra odio. 
                    Pellentesque ac velit egestas, luctus arcu non, laoreet mauris. Sed in ipsum tempor, 
                    consequat odio in, porttitor ante. Ut mauris ligula, volutpat in sodales in, porta non odio. 
                    Pellentesque tempor urna vitae mi vestibulum, nec venenatis nulla lobortis. 
                    Proin at gravida ante. Mauris auctor purus at lacus maximus euismod. 
                    Pellentesque vulputate massa ut nisl hendrerit, eget elementum libero iaculis.</p>
                    <>
                        <i>
                        Creativity is just connecting things. 
                        When you ask creative people how they did something, 
                        they feel a little guilty because they didn't really do it, 
                        they just saw something. It seemed obvious to them after a while.<br />- Steve Job’s
                        </i>
                    </>
                    </div>
                    <div className='imgcontainer belowimg'><div className='innnercontainer'><img src={mission}/></div></div>
                </div>   
            </div>
            <Footer />
        </div>
    )
}

export default About;