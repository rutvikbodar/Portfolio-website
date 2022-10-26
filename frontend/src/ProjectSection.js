import './ProjectSection.css';
import React from 'react';
import retriveAllProjects from './DAO/ProjectsDAO';
import ProjectCard from "./ProjectCard";
import { connect } from 'react-redux';

const projectsection = function ProjectSection(props){

    const allProjects = props.allProjects;

    const projectsProvider = (arr) =>{
        if(arr.length===0) return []
        else{
            const projectCardArray = arr.map((item) => {return <ProjectCard index={item.index} img={item.img} name={item.name} version={item.version} description={item.description} tech={item.tech} creativity={item.creativity} gitrepo={item.gitrepo} key={item._id} type={item.type} versionList={item.versionList} upcomingUpdate={item.upcomingUpdate} />});
            return projectCardArray;
        }
    }

    const projects = projectsProvider(allProjects);

    return (
        <div className='projectSection'>
            {projects}
        </div>
    )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(projectsection);