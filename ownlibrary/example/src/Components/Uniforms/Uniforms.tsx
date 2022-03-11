import React from 'react'
import { AutoForm } from 'uniforms-material';
import { bridge as schema } from './Schema';

const Uniforms = () => {
  return (
    <div>
        <AutoForm schema={schema} onSubmit={console.log} />
    </div>
    )
}

export default Uniforms