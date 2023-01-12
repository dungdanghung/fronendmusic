import "./compunent03.scss"

function Compunent03() {
    
  return <div className="moiphathanh">
    <div className="moiphathanh_title">
        <div className="moiphathanh_title_header">
            <h3>Mới Phát Hành</h3>
        </div>
        <div className="moiphathanh_title_body">
            <button className="tatca">
                <p>TẤT CẢ</p>
            </button>
            <button className="vietnam">
                <p>VIỆT NAM</p>
            </button>
            <button className="quacte">
                <p>QUẤC TẾ</p>
            </button>
        </div>
    </div>
    <div className="moiphathanh_conten"></div>
  </div>
}

export default Compunent03