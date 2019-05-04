const { nappi } = process.env;

exports.handler = async (event, context) => {
    document.getElementById('nappi').innerHTML = nappi
};