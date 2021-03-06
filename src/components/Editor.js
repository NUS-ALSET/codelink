import React from 'react';
import AceEditor from 'react-ace'
import MarkdownEditor from './MarkdownEditor'

const Editor = ({ onRun, index, onChange, value = '', result, runAll, readOnly, showButton = true, isRunning, markdownValue, onMarkdownChange, onMarkdownRun }) => (
  <div className="col-lg-12" style={{marginTop: '20px'}}>
    <div>
      <MarkdownEditor
        isRunning={isRunning}
        value={markdownValue}
        onMarkdownChange={onMarkdownChange}
        onMarkdownRun={onMarkdownRun} />
      <hr />
    </div>
    <div className="col-lg-6">
      <div className="row">
        <div className="editor" style={{width: '100%'}}>
          <AceEditor
            readOnly={readOnly}
            mode="python"
            theme=""
            value={value}
            onChange={onChange}
            editorProps={{$blockScrolling: true}}
            minLines={1}
            maxLines={value.split(/\r\n|\r|\n/).length}
            showLineNumbers={false}
            commands={[{   // commands is array of key bindings.
              name: 'executeCode', //name for the key binding.
              bindKey: { win: 'Shift-Enter', mac: 'Shift-Enter' }, //key combination used for the command.
              exec: runAll  //function to execute when keys are pressed.
            }]}
          />
        </div>
      </div>
      <div className="row" style={{padding: 0, marginTop: '10px'}}>
        <div className="col-lg-8" style={{paddingLeft: 0}}>
          <pre id={`editor-result-${index}`} style={{height: '100%', backgroundColor: 'white', border: 0}}>
            {result}
          </pre>
        </div>
        {showButton &&
          <div className="col-lg-4">
            <button
              className="btn btn-success"
              onClick={onRun}
            >
              Run All
            </button>
          </div>
        }
      </div>
    </div>            
  </div>
)

export default Editor
