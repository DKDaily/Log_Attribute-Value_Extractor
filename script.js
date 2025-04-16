body {
    font-family: Arial, sans-serif;
    background-color: #121212;
    color: #e0e0e0;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h1 {
    color: #ff8c00;
    text-align: center;
    margin-bottom: 20px;
}

.log-type-selector {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 10px;
}

label {
    color: #ff8c00;
    font-weight: bold;
}

select {
    padding: 8px;
    border-radius: 4px;
    background-color: #2d2d2d;
    color: #e0e0e0;
    border: 1px solid #444;
}

.columns {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.input-column, .output-column {
    flex: 1;
    display: flex;
    flex-direction: column;
}

.textarea-wrapper {
    position: relative;
}

textarea {
    width: 100%;
    height: 300px;
    padding: 10px;
    padding-right: 40px;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #2d2d2d;
    color: #e0e0e0;
    font-family: monospace;
    resize: none;
    box-sizing: border-box;
}

.icon-button {
    position: absolute;
    bottom: 8px;
    right: 8px;
    background: none;
    border: none;
    font-size: 20px;
    color: #ff8c00;
    cursor: pointer;
}

.icon-button:hover {
    color: #ff9e3d;
}

.buttons {
    margin-top: 10px;
    display: flex;
    gap: 10px;
}

button {
    background-color: #ff8c00;
    color: #121212;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    cursor: pointer;
    font-weight: bold;
    flex: 1;
}

button:hover {
    background-color: #ff9e3d;
}

#outputBox {
    background-color: #252525;
}

@media (max-width: 768px) {
    .columns {
        flex-direction: column;
    }
}
