import './topo.css'

export default function Topo({img}) {
    return (
        <div className='topo'>

            <h1>TrackIt</h1>
            <img alt="" src={img} />
        </div>
    )
}