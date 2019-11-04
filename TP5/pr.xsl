<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">
    
    <xsl:output method="xhtml" indent="yes" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <html>
            <head>
                <title>Manifesto</title>
                <meta charset="UTF-8"/>
            </head>
            <body>
                <h1 align="center">Manifesto</h1>
                <xsl:apply-templates/>
            </body>
        </html>
    </xsl:template>
    
    <xsl:template match="meta">
        <hr/>
        <table>
            <tr align="left">
                <th>KEY NAME: </th><td><xsl:value-of select="keyname"/></td>
                <th>BEGIN DATE: </th><td><xsl:value-of select="bdate"/></td>
            </tr>
            <tr align="left">
                <th>TITLE: </th><td><xsl:value-of select="title"/></td>
                <th>END DATE: </th><td><xsl:value-of select="edate"/></td>
            </tr>
            <tr align="left">
                <th>SUBTITLE: </th><td><xsl:value-of select="subtitle"/></td>
                <th><a href="">SUPERVISOR:</a> </th><td><xsl:value-of select="supervisor/name"/> - <xsl:value-of select="supervisor/email"/></td>
            </tr>
        </table>
        <hr/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="workteam">
        <h2>Workteam</h2>
        <table>
            <tr align="left">
                <th>Identifier: </th><td><xsl:value-of select="member/identifier"/></td> 
            </tr>
            <tr align="left">
                <th>Name: </th><td><xsl:value-of select="member/name"/></td> 
            </tr>
            <tr align="left">
                <th>Email: </th><td><xsl:value-of select="member/email"/></td> 
            </tr>
            <tr align="left">
                <th>Photo: </th>
                <td>
                    <img width="100px" height="100px">
                        <xsl:attribute name="src">
                            <xsl:value-of select="member/photo/@path"/>
                        </xsl:attribute>
                    </img>
                </td> 
            </tr>
        </table>
        <hr/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="abstract">
        <h2>Abstract</h2>
        <p><xsl:value-of select="p"/></p>
        <hr/>
        <hr/>
    </xsl:template>
    
    <xsl:template match="deliverables">
        <div>
            <h2>Deliverables</h2>
            <xsl:apply-templates/>
        </div>
    </xsl:template>
    
    <xsl:template match="deliverable">
        <div>Name: <xsl:value-of select="."/></div>
        <a href="{@path}"><xsl:value-of select="@path"/></a>
    </xsl:template>
    
    <xsl:template match="xref">
        <a href="{@url}"><xsl:value-of select="."/></a>
    </xsl:template>
         
</xsl:stylesheet>