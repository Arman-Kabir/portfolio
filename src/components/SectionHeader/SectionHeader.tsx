import './sectionHeader.css';

const SectionHeader = ({ title }) => {
  return (
    <div className='section_header'>
      <h2>{title}</h2>
    </div>
  )
}

export default SectionHeader;