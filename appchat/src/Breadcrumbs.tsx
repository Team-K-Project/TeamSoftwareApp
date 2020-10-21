import React from 'react';
import { Breadcrumb } from 'antd';

interface NamedLink {
    label: string
    location: string
}

export default function SimpleBreadcrumbs({ history, prefix }: { history: any, prefix: string }) {

    let path: string = history.location.pathname
    path = path.replace(/\/$/, '')
    path = path.replace(/\//, '')

    if (path.startsWith(prefix)) {
        path = path.slice(prefix.length)
    }

    const links: NamedLink[] = []
    links.push({
        label: 'Home',
        location: '/'
    })


    let currentPath = ''
    path.split('/').forEach(val => {
        if (val) {
            currentPath += '/' + val
            links.push({
                label: val,
                location: currentPath
            })
        }

    })

    return (<div style={{ display: 'flex', backgroundColor: 'white', alignItems: 'center', paddingTop: 10, paddingBottom: 10, paddingLeft: 10 }}>


        <Breadcrumb>

            {links.map((link, idx) => (
                <Breadcrumb.Item key={idx} onClick={() => {
                    if (prefix) {
                        history.push(`/${prefix + link.location}`)

                    } else {
                        history.push(`${link.location}`)

                    }
                }
                }>
                    {link.label}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
        <br />
    </div>
    );
}