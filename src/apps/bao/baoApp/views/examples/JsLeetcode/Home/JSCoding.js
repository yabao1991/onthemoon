import React from 'react';
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from '@material-ui/core/Link';
import MuiAlert from '@material-ui/lab/Alert';
import jsData from '../js'

const useStyles = makeStyles({
    rootWrap: {
        minWidth: '100%',
        minHeight: '100%',
        // display: 'flex',
        // justifyContent: "space-between",
        // flexWrap: 'wrap'
    },
    tableWrap: {
        // flex: '1',
    },
    JScodeWrap: {
        // flex: '2',
        minHeight: '420'
    }
  });


const Alert = (props) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function JSCoding() {
    const classes = useStyles();
    // const [selectedRow, setSelectedRow] = React.useState(null)
    const [JsTitle, setJsTitle] = React.useState("Welcome")
    const [jsSolution, setJsSolution] = React.useState("console.log('Hello JS')")
    const [refLink, setRefLink] = React.useState([])
    const [notes, setNotes] = React.useState('')
    const [
        state,
        // setState
    ] = React.useState({
        columns: [
            { title: 'ID', field: 'id' },
            { title: 'Name', field: 'name' },
            // { title: 'Level', field: 'level' }
        ],
        data: jsData,
    });

    return (
        <div className={classes.rootWrap}>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={4}>
                    <MaterialTable
                        title=""
                        columns={state.columns}
                        data={state.data}
                        onRowClick={(evt, selectedRow) => {
                            // setSelectedRow(selectedRow)
                            // setState()
                            setJsTitle(selectedRow.name)
                            setJsSolution(selectedRow.jsSolution)
                            setRefLink(selectedRow.refLink)
                            setNotes(selectedRow.notes)
                        }}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={8} className={classes.JScodeWrap}>
                    <Card>
                        <CardContent>
                            <Typography 
                                variant="h5" 
                                component="h5"
                            >
                                {JsTitle}
                            </Typography>
                            {
                                refLink.map((link, index) => (
                                    <Typography className={classes.root} key={index}>
                                        <Link href={link} target="_blank" rel="noopener">
                                            {link}
                                        </Link>
                                    </Typography>
                                ))
                            }
                            {notes && <Alert severity="info">{notes}</Alert>} 
                            {/* code */}
                            <SyntaxHighlighter 
                                language="javascript"
                                style={duotoneDark}
                            >
                                {jsSolution}
                            </SyntaxHighlighter>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}
