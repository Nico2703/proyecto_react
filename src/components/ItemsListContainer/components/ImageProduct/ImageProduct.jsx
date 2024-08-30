
export const ImageProduct = ({imagenURL}) => {
    const style = {width:'150px', height:'150px'}
    return <>
        <div className="productImage">
            <img style={style} src={imagenURL} alt=""/>
        </div>
    </>
}