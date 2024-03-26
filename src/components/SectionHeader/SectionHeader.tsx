import './sectionHeader.css';

interface Title {
  title: string;
}

export function SectionHeader ({ title }: Title) {
  return (
    <div className='section_header'>
      <h2>{title}</h2>
    </div>
  )
}

// export default SectionHeader;