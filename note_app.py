import flask
app = flask.Flask("note_app")

# function get all html pages
def get_html(page_name):
    open_html = open(page_name+".html")
    content = open_html.read()
    open_html.close()
    return content

# open the note file and read it 
def open_note_file():
 file_open = open("note.txt")
 file_content = file_open.read()
 AllNotes = file_content.split("\n")
 file_open.close()
 return AllNotes
 
# index page for enter userName
@app.route("/")
def indexPage():
    return get_html("index")


# fucntion return home page html 
@app.route("/home")
def home_page():
    home_content = get_html("home")
    return home_content

# function to add note in note.txt and add it into home page
@app.route("/addNote")
def add_note():
    if(flask.request.args.get("noteDescription")!=""):
        open_file = open("note.txt","a")
        note_details = flask.request.args.get("noteDescription").strip()
        open_file.write(note_details +"\n")
        open_file.close()
        return flask.redirect('/home')
    else:
        return "No Note Added"
    
@app.route("/search")
def search_note():
    AllUserNotes = open_note_file()
    notes = ""
    search_note = flask.request.args.get("search")
    for line in AllUserNotes:
        if(line.find(search_note)!=-1):
            notes+="<p>"+line+"</p> <hr>"
    if(notes == ""):
        return "<p> No results found </P>"
    else:
        return notes

    