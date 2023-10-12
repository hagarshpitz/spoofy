import useStyles from "./tableHeadingStyle";
interface Props {
    title: string
}
const TableHeading= (props: Props) => {
    const {title} = props;
    const { classes } = useStyles();
    return(
        <div className={ classes.tableHeader}>
            <h1 className={classes.tableHeadreText}> {title}</h1>
        </div>
    )
};
export default TableHeading;