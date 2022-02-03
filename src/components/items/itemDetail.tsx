import DtItem from '../../dataTypes/item';

interface IProps {
    item: DtItem | null;
}

const ItemDetail = ({item}: IProps) => {
  return <div>
    {item? item.title:null}
    {item? item.description:null}
  </div>;
}

export default ItemDetail;