import './divider.scss'


const Divider = ({url, color}) => {

    return (
        <div className='divider'>
            <div className="divider__wrapper" style={{'--divider-color': color }}>
                <img src={url} alt="coffee grains" className='divider__img'/>
            </div>
        </div>
    );
}

export default Divider;