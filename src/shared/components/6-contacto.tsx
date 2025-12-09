'use client'
import React from 'react'
import Image from 'next/image';
import '../../app/globals.css';
import SendEmailForm from '../../features/contacto/services/email.service';
import { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCircleXmark} from '@fortawesome/free-regular-svg-icons'
import {faEllipsis} from '@fortawesome/free-solid-svg-icons'

export function Contacto() {
    const [expanded, setExpanded] = useState(false);
    const [view, setView] = useState(true);

    return (
        <div>
            {
                expanded ? 
                <div className='px-3 py-2 rounded col-2 bg-white'
                    style={{position: 'fixed', height: '280px', width: '250px', bottom: '10px', right: '10px', border: '1px solid #b3b3b3', transition: '0.4s'}}>
                    {
                        view ?
                        <div className='d-flex flex-column justify-content-evenly align-items-center w-100 h-100'>
                             <div className='position-absolute ' style={{top: '3px', right: '16px', cursor: 'pointer'}}
                                onClick={() => {setExpanded(false); setView(true)}}
                                >
                                    <FontAwesomeIcon icon={faCircleXmark} />
                            </div>
                            <Image src='/imgs/img-alvaro.png' alt='alt' width={100} height={100} style={{borderRadius: '50px'}}/>
                            <p>Escríbeme un mensaje</p>
                            <button style={{background: '#2b7fcf', border: 'none', color: 'white', borderRadius: '5px'}} 
                                className='px-4 py-1' onClick={() => {setView(false)}}>
                                continuar
                            </button>
                        </div>
                            :
                        <div>
                            <div className='position-relative'>
                                <div className='position-absolute ' style={{top: '-5px', right: '0', cursor: 'pointer'}}
                                onClick={() => {setExpanded(false); setView(true)}}
                                >
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                </div>
                            </div>
                            <SendEmailForm/>
                        </div>
                    }
                </div>
                :
                <div className='d-flex px-3 py-2 text-white btnContact' 
                    onClick={() => {setExpanded(true)}}>
                    <p className='m-auto'>
                        <FontAwesomeIcon style={{fontSize: '25px'}} icon={faEllipsis} />
                    </p>
                </div>
            }
        </div>
        
    )
}