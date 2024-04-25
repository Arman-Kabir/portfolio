import './Project.css';


export default function Project({project}) {
    console.log(project);
  return (
    <div className='project'>
        <p>Name:{project.name}</p>
        <p>description:{project.description}</p>
        <p>tech:{project.tech}</p>
    </div>
  )
}
