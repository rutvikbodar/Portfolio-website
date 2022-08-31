import './ProjectSection.css';
import React from 'react';
import retriveAllProjects from './DAO/ProjectsDAO';
import ProjectCard from "./ProjectCard";

export default function ProjectSection(){

    var [allProjects,setAllProjects] = React.useState([]);

    const getAllProjects = async() =>{
        const Projects =  await retriveAllProjects();
        setAllProjects(Projects);
    }

    const projectsProvider = (arr) =>{
        if(arr.length===0) return []
        else{
            const projectCardArray = arr.map((item) => {return <ProjectCard index={item.index} img={item.img} name={item.name} version={item.version} description={item.description} tech={item.tech} creativity={item.creativity} gitrepo={item.gitrepo} key={item._id} type={item.type} versionList={item.versionList} />});
            return projectCardArray;
        }
    }

    const projects = projectsProvider(allProjects);

    React.useEffect(()=>{
        getAllProjects();  
    },[]);

    return (
        <div className='projectSection'>
            {projects}
        </div>
    )
}