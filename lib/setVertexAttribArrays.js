var GL_MAP = {};

/**
 * @mat
 * @param gl {WebGLRenderingContext} The current WebGL context
 * @param attribs {[type]}
 */
var setVertexAttribArrays = function (gl, attribs, state)
{

    if(state)
    {

        var i,
            tempAttribState = state.tempAttribState,
            attribState = state.attribState;

        for (i = 0; i < tempAttribState.length; i++)
        {
            tempAttribState[i] = false;
        }

        // set the new attribs
        for (i in attribs)
        {
            tempAttribState[attribs[i].attribute.location] = true;
        }

        for (i = 0; i < attribState.length; i++)
        {
            if (attribState[i] !== tempAttribState[i])
            {
                attribState[i] = tempAttribState[i];

                if (state.attribState[i])
                {
                    gl.enableVertexAttribArray(i);
                }
                else
                {
                    gl.disableVertexAttribArray(i);
                }
            }
        }

    }
    else
    {
        for (var i = 0; i < attribs.length; i++)
        {
            var attrib = attribs[i];
            gl.enableVertexAttribArray(attrib.attribute.location);
        }
    }
};

module.exports = setVertexAttribArrays;
