import Navbar from "./Navbar";
import "./AllApartmnts.css"
import testur from "./the-outpost.jpg"
import { useNavigate } from "react-router-dom";
function AllApartmnts() {

    /* This will hold basic apartment information until i can put it all in a database. It's really long. Like, REALLY long... */
    const apartmentInfo = [
        {
            name:'The Outpost',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Thompson',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Bobcat Village',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'College Town San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Vie Lofts at San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Dakota Ranch Student Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Grove at San marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Uptown Square',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Junction San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The View on the Square',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Westfield Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Village on Telluride',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Cottages at San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Lodge Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Arba',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Bishops Square',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Avenue at San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Copper Beech at San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Cheatham Street Flats',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'redpoint San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },{
            name:'Sanctuary Lofts',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Millenium on Post',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Retreat',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Elevation on Post',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Lyndon at Springtown',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Social SMTX',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Local Downtown',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Vistas San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Oasis San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Highcrest Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Timbers',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Hill Country Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Vintage Pads Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Leah Avenue Townhomes',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },{
            name:'CastleRock at San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Villagio Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Fitzroy San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Edge',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Pointe San Marcos',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Riverside Ranch',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'The Parlor',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'River Oaks Villas Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Sadler House Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Hawthorne at Blanco Riverwalk',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Springmarc',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Savannah Club Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Sutton Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },
        {
            name:'Mosscliff Apartments',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        },{
            name:'Encino Pointe',
            image:'',
            amenities: {
                pets:'',
                pool:'',
                gym:'',
                incldUtilities: '',
                shuttleRte: '',
                indvLeasing: '',
                wsherDryer: '',
                furnished: '',
                rmMatching: '',
            }
        }
    ]

    const navigate = useNavigate();
    return (
        <div className="mainContainer">
            <div className="nav">
                <Navbar ></Navbar>
            </div>
           
            <div className="listContainer">
                {apartmentInfo.map((apartment)=>
                    <div className = "apartmentCard" key={apartment.name}>
                        <img src={testur} alt="n/a"></img>
                        <p>{apartment.name}</p>
                        <button className="generalBtn" type="button" onClick={()=>{navigate("/apartmntview")}}>More Info</button>
                    </div>)}
            </div>
        </div>
    );
  }
  
export default AllApartmnts;
  