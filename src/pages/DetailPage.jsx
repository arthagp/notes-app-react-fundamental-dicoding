import React from 'react';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { getNote } from '../utils/network-data';

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: null
    };
  }

  async componentDidMount() {
    try {
      const { data } = await getNote(this.props.id);
      this.setState({
        note: data
      });
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  }

  render() {
    if (this.state.note === null) {
      return <p>Note is not found!</p>;
    }

    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

export default DetailPageWrapper;
