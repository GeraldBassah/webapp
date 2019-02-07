import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class PageInfo extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425_960_720.png"
                                alt="avatar"
                                style={{ height: '200px' }} />

                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Gerald Bassah</h2>
                        <h4 style={{ color: 'grey' }}>Sectional Head </h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Bryan Cranston played the role of Walter in Breaking Bad. He is also known for playing Hal in Malcom in the Middle</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Address</h5>
                        <p>Tech Junction </p>
                        <h5>Phone</h5>
                        <p>0248743302</p>
                        <h5>Email</h5>
                        <p>geebash@hotmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                    </Cell>
                    <Cell className="page-info-right-col" col={8} >
                        <h2>Education</h2>
                        <Education startYear={2012}
                            endYear={2015}
                            schoolName="St. Augustine's Colllege"
                            schoolDescription="Augusco is the best Senior High school in Africa"
                        />
                        <Education startYear={2015}
                            endYear={2019}
                            schoolName="Kwame Nkrumah University Of Science And Technology"
                            schoolDescription="KNUST is the MIT of Ghana."
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Experience</h2>
                        <Experience
                            startYear={2019}
                            endYear={2022}
                            jobName="Sectional Head at AMA 1"
                            jobDescription="Headed the section 1 of Mokola Market" />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Skills</h2>
                        <Skills skill="Leadership"
                            progress={70} />
                        <Skills skill="Visionary"
                            progress={80} />
                        <Skills skill="Strictness"
                            progress={65} />
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default PageInfo;